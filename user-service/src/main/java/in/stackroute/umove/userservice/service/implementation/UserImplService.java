package in.stackroute.umove.userservice.service.implementation;

import in.stackroute.umove.userservice.model.Role;
import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.model.UserStatus;
import in.stackroute.umove.userservice.repository.UserRepository;
import in.stackroute.umove.userservice.service.UserService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Iterator;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Service
public class UserImplService implements UserService {


    @Autowired
    private UserRepository userRepository;

    /**
     *
     * Method to get user list
     */
    @Override
    public List<UserData> getUserList()
    {
        return userRepository.findAll();
    }

    /**
     * Method to find user by name and throwing exception if user not found
     *
     *
     */
    @Override
    public List<UserData> findByName(String name) {
        List<UserData> users = userRepository.findByName(name);
//        if (users.isEmpty()) {
//            throw new UserNotFoundException("User name" + name);
//        }
        return users;
    }

    /**
     *
     * Method to find user by role
     *
     */

    @Override
    public List<UserData> findByRole(Role role) {
        List<UserData> users = userRepository.findByRole(role);
        return users;
    }

    @Override
    public List<UserData> findByUserStatus(UserStatus userStatus)
    {
        List<UserData> users = userRepository.findByUserStatus(userStatus);
        return users;
    }

    /**
     *
     * Method to add a new user and throwing exception if already exists
     *
     */

    @Override
    public UserData addUser(UserData user) {
        final List<UserData> userList = userRepository.findAll();
        final Iterator<UserData> iUserList = userList.iterator();
        while (iUserList.hasNext()) {
            if (iUserList.next().getName().equals(user.getName())) {
//                throw new UserAlreadyExistsException("User already exists!!");
            }
        }
        return userRepository.save(user);
    }
    /**
     *
     * Method to find user by id
     *
     */

    @Override
    public UserData getById(ObjectId objid) {
        return userRepository.getUserBy_id(objid);
    }


    /**
     *
     * Method to update user by id,name,role,status and document
     *
     */

    @Override
    public UserData updateUser(ObjectId objid, UserData user) {
        final UserData updatedUser = userRepository.findBy_id(objid);
        if (updatedUser != null) {
            if (user.getName() != null) {
                updatedUser.setName(user.getName());
            }
            if (user.getEmail() != null) {
                updatedUser.setEmail(user.getEmail());
            }
            if (user.getMobileNumber() != null) {
                updatedUser.setMobileNumber(user.getMobileNumber());
            }
            if (user.getUserStatus() != null) {
                updatedUser.setUserStatus(user.getUserStatus());
            }
            if (user.getRole() != null) {
                updatedUser.setRole(user.getRole());
            }
            return userRepository.save(updatedUser);
        }
        return null;
    }
//    @Override
//    public DocumentVerification updateDocumentVerification(ObjectId id, DocumentVerification documentVerification) {
//        DocumentVerification documentVerification = userRepository.findBy_id(id);
//        if (documentVerification != null) {
//            if (documentVerification.getDocumentStatus() != null) {
//                documentVerification.getDocumentStatus(documentVerification.getDocumentStatus());
//            }
//            if (DocumentVerification.() != null) {
//                updatedUser.setEmail(user.getEmail());
//            }
//            if (user.getMobileNumber() != null) {
//                updatedUser.setMobileNumber(user.getMobileNumber());
//            }
//            if (user.getUserStatus() != null) {
//                updatedUser.setUserStatus(user.getUserStatus());
//            }
//            if (user.getRole() != null) {
//                updatedUser.setRole(user.getRole());
//            }
//            return userRepository.save(updatedUser);
//        }
//        return null;
//    }


    /*
     *
     Method for uploading image to resources/documents folder based on userid.
     *
     */
    @Override
    public void saveImage(MultipartFile imageFile, String uid) throws Exception{
//        String folder = "/home/ashwin/Documents/Project/umove/user-service/src/main/resources/documents/";
        final String folder = "/home/kumardivyanshu/Desktop/Stackroute Project/umove/user-service/src/main/resources/documents/";
        final byte[] bytes = imageFile.getBytes();
        final Path path = Paths.get(folder + uid);
        Files.write(path, bytes);
    }
}
