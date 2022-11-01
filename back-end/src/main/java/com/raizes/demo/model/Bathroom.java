package com.raizes.demo.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;


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

//    @JsonFormat(pattern = "dd-MM-yyyy")
//    private LocalDate projectDate;



    private Boolean vanity;
    private String vanity_Comments;

    private Boolean tub;
    private String tub_Comments;

    private Boolean sink;
    private String sink_Comments;

    private Boolean toilet;
    private String toilet_Comments;

    public Bathroom() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getLength() {
        return length;
    }

    public void setLength(Integer length) {
        this.length = length;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public String getClient_FirstName() {
        return client_FirstName;
    }

    public void setClient_FirstName(String client_FirstName) {
        this.client_FirstName = client_FirstName;
    }

    public String getClient_LastName() {
        return client_LastName;
    }

    public void setClient_LastName(String client_LastName) {
        this.client_LastName = client_LastName;
    }

    public Boolean getVanity() {
        return vanity;
    }

    public void setVanity(Boolean vanity) {
        this.vanity = vanity;
    }

    public String getVanity_Comments() {
        return vanity_Comments;
    }

    public void setVanity_Comments(String vanity_Comments) {
        this.vanity_Comments = vanity_Comments;
    }

    public Boolean getTub() {
        return tub;
    }

    public void setTub(Boolean tub) {
        this.tub = tub;
    }

    public String getTub_Comments() {
        return tub_Comments;
    }

    public void setTub_Comments(String tub_Comments) {
        this.tub_Comments = tub_Comments;
    }

    public Boolean getSink() {
        return sink;
    }

    public void setSink(Boolean sink) {
        this.sink = sink;
    }

    public String getSink_Comments() {
        return sink_Comments;
    }

    public void setSink_Comments(String sink_Comments) {
        this.sink_Comments = sink_Comments;
    }

    public Boolean getToilet() {
        return toilet;
    }

    public void setToilet(Boolean toilet) {
        this.toilet = toilet;
    }

    public String getToilet_Comments() {
        return toilet_Comments;
    }

    public void setToilet_Comments(String toilet_Comments) {
        this.toilet_Comments = toilet_Comments;
    }
}
