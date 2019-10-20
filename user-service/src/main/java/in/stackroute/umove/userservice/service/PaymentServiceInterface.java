package in.stackroute.umove.userservice.service;

import in.stackroute.umove.userservice.model.UserPaymentMethod;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PaymentServiceInterface {
    public List<UserPaymentMethod> getPayments(String objid);
    public List<UserPaymentMethod> addNewPaymentMethod(String objid,UserPaymentMethod userPaymentMethod);
    public UserPaymentMethod getPaymentMethodById(String objid, int pid);
    public UserPaymentMethod updatePaymentMethodById(String objid,int pid, UserPaymentMethod userPaymentMethod);
    public void deletePaymentMethodById(String objid, int pid);
}
