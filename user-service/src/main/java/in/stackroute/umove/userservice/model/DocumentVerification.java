package in.stackroute.umove.userservice.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor

public class DocumentVerification {

    private String image;
    private String drivingLicenceNumber;
    private LocalDate expiryDate;
    private DocumentStatus documentStatus;

    public DocumentVerification(DocumentStatus documentStatus, String image, String drivingLicenceNumber, LocalDate expiryDate)
    {
        this.documentStatus = documentStatus;
        this.image = image;
        this.drivingLicenceNumber = drivingLicenceNumber;
        this.expiryDate = expiryDate;
    }
}
