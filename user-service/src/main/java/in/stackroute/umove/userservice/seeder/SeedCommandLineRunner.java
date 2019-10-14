package in.stackroute.umove.userservice.seeder;


import in.stackroute.umove.userservice.model.*;
import in.stackroute.umove.userservice.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Component
public class SeedCommandLineRunner implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    LocalDate date= LocalDate.now();
    @Override
    public void run(String... args) throws Exception {
//         UserData user = new UserData("Saurav", "9700056794", "saurav@gmail.com", Role.User, UserStatus.Inactive);
//
//         DocumentVerification dVerification = new DocumentVerification(DocumentStatus.Verified, "DLImage",
//                "KA-01-2009-0004558",date);
//        user.setDocument(dVerification);
//        userRepository.save(user);
    }
}
