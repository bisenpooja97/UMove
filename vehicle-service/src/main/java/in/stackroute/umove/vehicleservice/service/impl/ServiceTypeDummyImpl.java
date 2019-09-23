package in.stackroute.umove.vehicleservice.service.impl;

import in.stackroute.umove.vehicleservice.model.Type;
import in.stackroute.umove.vehicleservice.repository.TypeRepo;
import in.stackroute.umove.vehicleservice.service.ServiceType;
import org.springframework.stereotype.Service;

@Service
public class ServiceTypeDummyImpl implements ServiceType {

    TypeRepo repo;
    @Override

    public void addType(Type type) {
        /*List<Type> typeList=repo.findBytname(type.getName());
        if(typeList.size()>0){
            throw new TypeAlreadyExistException("Type already exists"+type.getName());
        }*/
        repo.save(type);

    }


}
