package in.stackroute.umove.userservice.seeder;

import in.stackroute.umove.userservice.model.*;
import in.stackroute.umove.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class SeedCommandlineRunner implements CommandLineRunner
{
    @Autowired
    private UserRepository userRepository;

    LocalDate date= LocalDate.now();
    /**
     *
     * @param args
     * @throws Exception
     *
     * Seed data for User and document verification
     */
    @Override
    public void run(String... args) throws Exception
    {
//        UserData user=new UserData("Rahul","9414632078","rahul@gmail.com",Role.User,UserStatus.Inactive);
////        DocumentVerification documentVerification = new DocumentVerification(DocumentStatus.Pending, "DLImage",
////                "RJ27-SL-7133",date);
////
////        user.setDocument(documentVerification);
//        userRepository.save(user);

    }
}
