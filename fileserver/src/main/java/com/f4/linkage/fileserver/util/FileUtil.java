package com.f4.linkage.fileserver.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileUtil {
    private static final Logger LOGGER = LoggerFactory.getLogger(FileUtil.class);
    public static int momentID = -1;

    @Resource
    private JdbcTemplate jdbcTemplate;

    @Value("${app.linkage.fileRoot}")
    private String fileRoot;

    public boolean saveFiles(MultipartFile[] files, int kind){
        try {
            for (int i = 0; i < files.length; i++) {
                MultipartFile file = files[i];
                file.transferTo(getServerFilePath(i, file, kind));
            }
        }catch (IOException e){
            return false;
        }
        return true;
    }

    public boolean saveIconFile(MultipartFile file, String user){
        try{
            file.transferTo(Paths.get(fileRoot + "icon/"+ user));
        }catch (IOException e){
            return false;
        }
        return true;
    }

    public boolean saveGlobalIconFile(MultipartFile file, String user){
        try{
            file.transferTo(Paths.get(fileRoot + "global_icon/"+ user));
        }catch (IOException e){
            return false;
        }
        return true;
    }

    private Path getServerFilePath(int index, MultipartFile file, int kind){
        String fileName = file.getOriginalFilename();
        LOGGER.info("file name is " + fileName);
        String fileKind = kind == 0 ? "img" : "video";

        return Paths.get(fileRoot + fileKind +"/" + momentID + "_" + index);
    }

    private String getPosix(String name){
        if(name.isEmpty()){
            return "";
        }
        String[] splits = name.split("\\.");
        return splits[splits.length - 1];
    }

    public void updateMomentID(){
        if(momentID < 0){
            String query = "SELECT COUNT(*) FROM moment";
            momentID = jdbcTemplate.queryForObject(query, Integer.class) + 1;
        }
        else {
            momentID++;
        }
    }

    public void transfer(HttpServletResponse response, String path) {
        File file = new File(fileRoot + path);
        if (file.exists()) {
            FileInputStream fis = null;
            OutputStream os = null;
            try {
                fis = new FileInputStream(file);
                os = response.getOutputStream();
                byte[] content = new byte[fis.available()];
                fis.read(content);
                os.write(content);
                response.setStatus(200);
                /*int count = 0;
                byte[] buffer = new byte[1024 * 8];
                while ((count = fis.read(buffer)) != -1) {
                    os.write(buffer, 0, count);
                    os.flush();
                }*/

            } catch (Exception e) {
                response.setStatus(500);
            } finally {
                try {
                    fis.close();
                    os.close();
                } catch (IOException e) {
                    response.setStatus(500);
                }
            }
        }
        else {
            response.setStatus(404);
            try{
            response.getWriter().println("The file you request is not found!");
            }catch (IOException e){
            }
        }
    }
}
