package in.stackroute.umove.userservice.service.implementation;

import in.stackroute.umove.userservice.exceptions.UserAlreadyExistsException;
import in.stackroute.umove.userservice.model.UserData;
import in.stackroute.umove.userservice.repository.UserRepository;
import in.stackroute.umove.userservice.service.UserService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Iterator;
import java.util.List;

@Service
public class UserImplService implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<UserData> getUserList()
    {
        return userRepository.findAll();
    }

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
    public UserData getById(ObjectId _id) {
        return userRepository.getUserBy_id(_id);
    }

}
