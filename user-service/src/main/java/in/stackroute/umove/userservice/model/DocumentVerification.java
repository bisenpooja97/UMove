package in.stackroute.umove.userservice.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor

/*
 * Document verification details
 */

public class DocumentVerification {
    private DocumentStatus documentStatus;
    private String image;
    private String dLicenceNumber;
    private LocalDate expiryDate;


    public DocumentVerification(DocumentStatus documentStatus, String image, String dLicenceNumber, LocalDate expiryDate)
    {
        this.documentStatus = documentStatus;
        this.image = image;
        this.dLicenceNumber = dLicenceNumber;
        this.expiryDate = expiryDate;
    }
}
