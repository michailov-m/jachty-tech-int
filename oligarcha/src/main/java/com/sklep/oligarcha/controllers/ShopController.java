package com.sklep.oligarcha.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sklep.oligarcha.entities.Jacht;
import com.sklep.oligarcha.entities.RezerwacjaFormularz;
import com.sklep.oligarcha.repositories.JachtRepository;

@RestController
@CrossOrigin
public class ShopController {
	
	@Autowired
	JachtRepository repo;
	
	@GetMapping("/jachty/all")
	public List<Jacht> getJachty() {
		return repo.findAllJacht();
	}
	
	@GetMapping("/jacht/{typeId}")
	public List<Jacht> getJachtyByType(@PathVariable("typeId") int id) {
		return repo.findJachtyByType(id);
	}
	
	@PostMapping("/jacht/rezerwuj")
	int dokonajRezerwacji(@RequestBody RezerwacjaFormularz formularz) {
		RezerwacjaFormularz form = formularz;
		return repo.rezerwujJacht(
				form.getIdJachtu(),
				form.getDataOd(),
				form.getDataDo(),
				form.getImie(), 
				form.getNazwisko(),
				form.getAdresEmail(), 
				form.getNrTelefonu());
	}

}
