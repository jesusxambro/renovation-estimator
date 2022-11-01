package com.raizes.demo.controllers;


import com.raizes.demo.dao.BathroomRepository;
import com.raizes.demo.model.Bathroom;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin
@RequestMapping("/bathrooms")
public class BathroomController {

    private final BathroomRepository repository;


    public BathroomController(BathroomRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/")
    public List<Bathroom> getAllProjects(){
        return this.repository.findAll();
    }

    @PostMapping("/list")
    public List<Bathroom> postListProjects(@RequestBody List<Bathroom> listToAdd){
        this.repository.saveAll(listToAdd);
        return this.repository.findAll();
    }
    @GetMapping("/{id}")
    public Bathroom getById(@PathVariable Long id) {
        return this.repository.findById(id).orElseThrow(NoSuchElementException::new);
    }

    @PostMapping("/")
    public Bathroom addNote(@RequestBody Bathroom NoteToAdd) {
        return this.repository.save(NoteToAdd);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) {
        this.repository.deleteById(id);
    }

    @PatchMapping("/{id}")
    public Bathroom updateTask(@PathVariable Long id, @RequestBody Bathroom taskToUpdate) {
        Bathroom inDb = this.repository.getReferenceById(id);
        Long originalID = inDb.getId();
        inDb = taskToUpdate;
        inDb.setId(originalID);
        return this.repository.save(inDb);
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(NoSuchElementException.class)
    public String handleElementNotFound(Exception e) {
        return e.getMessage();
    }


}
