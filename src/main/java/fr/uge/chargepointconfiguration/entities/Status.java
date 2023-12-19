package fr.uge.chargepointconfiguration.entities;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "status")
public class Status {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String error;
    //@NotNull(message = "the date of status is required, can not be null")
    private Timestamp lastUpdate;

    private enum State{

    }

    private enum Step{

    }

    private enum StatusProcess{ // corresponds à l'attribut status de la table Status (il ya avait un comflit entre
                                // le nom de la classe et le nom de l'enum)

    }
    //@NotNull(message = "the state is required, can not be null")
    private State state;
    //@NotNull(message = "the step is required, can not be null.")
    private Step step;
   // @NotNull(message = "the status is required, can not be null")
    private StatusProcess status;

    //SETTER
    public void seterror{

    }


}
