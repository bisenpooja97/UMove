package in.stackroute.umove.reportservice.repository;

import in.stackroute.umove.reportservice.model.Report;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.ZonedDateTime;
import java.util.Date;
import java.util.List;

@Repository
public interface RoleRepository extends MongoRepository<Report,ObjectId> {

    List<Report> findReportByBookingAt();

    @Query("{'bookingAt': {$gte : ?0, $lt: ?1}}")
    List<Report> findReportByBookingAt(Date startDateTime, Date endDateTime);
}
