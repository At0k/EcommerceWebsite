package com.ccsd.KAretail.Product;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@Service
public class FileStorageService {

    private final String uploadDir = System.getProperty("user.dir") + "/uploads";

    public String storeFile(MultipartFile file) throws IOException {
        // Create the directory if it does not exist
        File dir = new File(uploadDir);
        if (!dir.exists()) {
            dir.mkdirs();
        }

        // Save the file to the directory
        String filePath = uploadDir + File.separator + file.getOriginalFilename();
        FileOutputStream fout = new FileOutputStream(filePath);
        fout.write(file.getBytes());
        fout.close();

        // Return the path where the image is stored
        return "/uploads/" + file.getOriginalFilename(); // Relative path to serve later
    }
}
