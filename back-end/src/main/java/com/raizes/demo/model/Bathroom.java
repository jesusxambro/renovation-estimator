package com.raizes.demo.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "bathroom")
public class Bathroom {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;

    private Integer length;
    private Integer height;

    private String client_FirstName;
    private String client_LastName;

    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate projectDate;



    private Boolean vanity;
    private String vanity_Comments;

    private Boolean tub;
    private String tub_Comments;

    private Boolean sink;
    private String sink_Comments;

    private Boolean toilet;
    private String toilet_Comments;


}
