package br.senac.tads.dswa.exemplos;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.senac.tads.dswa.exemplos.Carro;
import br.senac.tads.dswa.exemplos.CarroRepository;
import jakarta.persistence.Entity;

@Entity
@Service
public class CarroService {
    
    private final CarroRepository carroRepository;

    @Autowired
    public CarroService(CarroRepository carroRepository) {
        this.carroRepository = carroRepository;
    }

    public List<Carro> listarCarros() {
        return carroRepository.findAll();
    }

    public void adicionarCarro(Carro carro) {
        carroRepository.save(carro);
    }

    public void atualizarCarro(Long id, Carro carroAtualizado) {
        Optional<Carro> carroExistente = carroRepository.findById(id);

        carroExistente.ifPresent(carro -> {
            carro.setId(carroAtualizado.getId());
            carro.setModelo(carroAtualizado.getModelo());
            carro.setFabricante(carroAtualizado.getFabricante());
            carro.setAnoLancamento(carroAtualizado.getAnoLancamento());
            carroRepository.save(carro);
        });
    }

    public void excluirCarro(Long id) {
        carroRepository.deleteById(id);
    }
}