package in.stackroute.umove.userservice.service.implementation;

import in.stackroute.umove.userservice.exceptions.UserAlreadyExistsException;
import in.stackroute.umove.userservice.model.*;
import in.stackroute.umove.userservice.repository.UserRepository;
import in.stackroute.umove.userservice.service.UserService;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import net.bytebuddy.matcher.EqualityMatcher;
import net.bytebuddy.pool.TypePool;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.groups.Default;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Service
public class UserImplService implements UserService {


    @Autowired
    private UserRepository userRepository;

    /**
     * Method to get user list
     */
    @Override
    public List<UserData> getUserList() {
        return userRepository.findAll();
    }

    /**
     * Method to find user by name and throwing exception if user not found
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
     * Method to find user by role
     */

    @Override
    public List<UserData> findByRoles(Role role) {
        List<UserData> users = userRepository.findByRoles(role);
        return users;
    }

    @Override
    public List<UserData> findByUserStatus(UserStatus userStatus) {
        List<UserData> users = userRepository.findByUserStatus(userStatus);
        return users;
    }

    @Override
    public boolean isVerifiedSupervisor(UserData user) {
        UserData savedUser = userRepository.findByMobileNumber(user.getMobileNumber());
        if(savedUser != null) {
            Iterator<Role> iterator = savedUser.getRoles().iterator();
            if(iterator.hasNext()) {
                if (iterator.next().equals(Role.ROLE_SUPERVISOR)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override
    public List<UserData> findByDocumentStatus(DocumentStatus documentStatus) {
        List<UserData> users = userRepository.findByDocumentStatus(documentStatus);
        return users;
    }

    @Override
    public UserData updateDocumentStatus(String id, String status) {
        UserData user = userRepository.getUserByid(id);

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

    /**
     * Method to add a new user and throwing exception if already exists
     */

    @Override
    public UserData addUser(UserData user) {
        String mobileNumber = user.getMobileNumber();
        final List<UserData> userList = userRepository.findAll();
        final Iterator<UserData> iUserList = userList.iterator();
        while (iUserList.hasNext()) {
            if (iUserList.next().getMobileNumber().equals(user.getMobileNumber())) {
                return userRepository.findByMobileNumber(mobileNumber);
            }
        }
        System.out.println(user.getRoles() + ":" + Role.ROLE_USER + ":" + Role.ROLE_SUPERVISOR);

        Role role = null;
        Iterator<Role> iterator = user.getRoles().iterator();
        if(iterator.hasNext()) {
            role = iterator.next();
        }

        if(role.equals(Role.ROLE_USER)) {
            System.out.println("Im inside if of user");
            user.setUserStatus(UserStatus.Inactive);
        } else if (role.equals(Role.ROLE_SUPERVISOR)) {
            System.out.println("another if");
            user.setUserStatus(UserStatus.Unallocated);
        }
        user.setPaymentMethod(new ArrayList<>());
        return userRepository.save(user);
    }

    @Override
    public UserData deleteUser(String objid)
    {
        UserData user=userRepository.findByid(objid);
        userRepository.delete(user);
        return user;
    }

    /**
     * Method to find user by id
     */

    @Override
    public UserData getById(String objid) {
        return userRepository.getUserByid(objid);
    }


    /**
     * Method to update user by id,name,role,status and document
     */

    @Override
    public UserData updateUser(String objid, UserData user) {
        final UserData updatedUser = userRepository.findByid(objid);
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
            if (user.getRoles() != null) {
                updatedUser.setRoles(user.getRoles());
            }
            if (user.getDocument() != null) {
                updatedUser.setDocument(user.getDocument());
            }
            return userRepository.save(updatedUser);
        }
        return null;
    }

//    public DocumentVerification updateDocument(String objid, DocumentVerification user) {
//        final UserData updatedUser = userRepository.findByid(objid);
//        final DocumentVerification updatedDocuemt = updatedUser.getDocument();
//        if (updatedDocuemt != null) {
//            if (user.getImage() != null) {
//                updatedDocuemt.setImage(user.getImage());
//            }
//            userRepository.save(updatedUser);
//            return updatedDocuemt;
//        }
//        return null;
//    }

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

