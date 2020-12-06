package io.github.cezareduardo.clientes.model.repository;

import io.github.cezareduardo.clientes.model.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {
}
