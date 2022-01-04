package com.sklep.oligarcha.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "jachty")
public class Jacht {

	@Id
	private Long id;
	private String nazwa;
	private Long idklasy;
	
	public Long getId() {return id;}
	public String getNazwa() {return nazwa;}
	public Long getIdKlasy() {return idklasy;}
}
