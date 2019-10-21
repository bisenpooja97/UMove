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

    LocalDate date = LocalDate.now();

    @Override
    public void run(String... args) throws Exception {

//        UserData userData = new UserData("Divyanshu","9432123890","divyanshu@gmail.com","Role.User","UserStatus.Inactive");
//          DocumentVerification documentVerification = new DocumentVerification(DocumentStatus.Verified, "DLImage",
//                 "RJ27-SL-4558",date);
//
//        userData.setDocument(documentVerification);
//
//        UserPaymentMethod userPaymentMethod = new UserPaymentMethod("9700056784", "wallet", "Paytm");
//        System.out.println(userData.getPaymentMethod());
//        userData.getPaymentMethod().add(userPaymentMethod);
//        userRepository.save(userData);

    }
    }

