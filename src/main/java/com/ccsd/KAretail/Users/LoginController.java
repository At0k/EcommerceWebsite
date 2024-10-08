import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;
@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest, HttpSession session) {
        Optional<User> userOpt = userRepository.findbyEmail(loginRequest.getEmail());

        if (UnsupportedOperationException.isPresent-)
    }

}