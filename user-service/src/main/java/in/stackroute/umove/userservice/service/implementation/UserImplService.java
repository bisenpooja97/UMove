package in.stackroute.umove.userservice.service.implementation;

import in.stackroute.umove.userservice.exceptions.UserAlreadyExistsException;
import in.stackroute.umove.userservice.exceptions.UserNotFoundException;
import in.stackroute.umove.userservice.model.DocumentStatus;
import in.stackroute.umove.userservice.model.Role;
import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.model.UserStatus;
import in.stackroute.umove.userservice.repository.UserRepository;
import in.stackroute.umove.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Iterator;
import java.util.List;

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
        if (users.isEmpty()) {
            throw new UserNotFoundException("User name" + name);
        }
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
    /**
     *
     * Method to find user by status
     *
     */
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
        List<UserData> userList = userRepository.findAll();
        Iterator<UserData> i = userList.iterator();
        while (i.hasNext()) {
            if (i.next().getName().equals(user.getName())) {
                throw new UserAlreadyExistsException("User already exists!!");
            }
        }
        return userRepository.save(user);
    }


    @Override
    public UserData getByid(String id) {
        return userRepository.findByid(id);
    }

    /**
     *
     * Method to find user by id
     *
     */
//    @Override
//    public UserData getById(ObjectId id) {
//        return userRepository.getUserBy_id(id);
//    }
    /**
     *
     * Method to update user by id,name,role,status and document
     *
     */

    @Override
    public UserData updateUser(String id, UserData user) {
        UserData updatedUser = userRepository.findByid(id);
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
            if(user.getDocument() != null){
                updatedUser.setDocument(user.getDocument());
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
    public void saveImage(MultipartFile imageFile, String id) throws Exception {
//        String folder = "/home/ashwin/Documents/Project/umove/user-service/src/main/resources/documents/";
        String folder = "/home/kumardivyanshu/Desktop/Stackroute Project/umove/user-service/src/main/resources/documents/";
        byte[] bytes = imageFile.getBytes();
        Path path = Paths.get(folder + id);
        Files.write(path, bytes);
    }

    @Override
    public UserData updateDocumentStatus(String id, String status)
    {
        UserData user = userRepository.getByid(id);

        if(status.equals("Verified")) {
            user.setUserStatus(UserStatus.Active);
            user.getDocument().setDocumentStatus(DocumentStatus.Verified);
        }
        else if(status.equals("Rejected")){
            user.setUserStatus(UserStatus.Inactive);
            user.getDocument().setDocumentStatus(DocumentStatus.Rejected);
        }

        userRepository.save(user);

        return user;
    }




}
