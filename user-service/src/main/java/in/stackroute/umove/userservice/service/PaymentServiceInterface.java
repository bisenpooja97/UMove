package in.stackroute.umove.userservice.service;

import in.stackroute.umove.userservice.model.UserPaymentMethod;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface PaymentServiceInterface {
    public List<UserPaymentMethod> getPayments(ObjectId objid);
    public List<UserPaymentMethod> addNewPaymentMethod(ObjectId objid,UserPaymentMethod userPaymentMethod);
    public UserPaymentMethod getPaymentMethodById(ObjectId objid, int pid);
    public UserPaymentMethod updatePaymentMethodById(ObjectId objid,int pid, UserPaymentMethod userPaymentMethod);
    public void deletePaymentMethodById(ObjectId objid, int pid);
}
