package com.sklep.oligarcha.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sklep.oligarcha.entities.Jacht;

@Repository
public interface JachtRepository extends CrudRepository<Jacht, Long> {
	
	@Query(value = "select * from jachty",
			nativeQuery = true)
	List<Jacht> findAllJacht();
	
	@Query(value = "select * from jachty "
			+ " where idklasy = :klasaId",
			nativeQuery = true)
	List<Jacht> findJachtyByType(@Param("klasaId") int klasaId);
	
	@Query(value = "SELECT rezerwuj_jacht(:jachtId,:dataOd,:dataDo,"
			+ ":imie,:nazwisko,:adresEmail,:nrTelefonu) from dual",
			nativeQuery = true)
	Integer rezerwujJacht(@Param("jachtId") Long jachtId,
			@Param("dataOd") String dataOd,@Param("dataDo") String dataDo,
			@Param("imie") String imie, @Param("nazwisko") String nazwisko,
			@Param("adresEmail") String adresEmail,@Param("nrTelefonu") String nrTelefonu);
}
