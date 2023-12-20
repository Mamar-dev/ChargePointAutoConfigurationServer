package fr.uge.chargepointconfiguration;

import org.java_websocket.server.WebSocketServer;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.net.InetSocketAddress;

@SpringBootApplication
public class ChargepointconfigurationApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChargepointconfigurationApplication.class, args);
		//String host = "169.254.138.53";
		String host = "localhost";
		int port = 8887;

		WebSocketServer server = new SimpleServer(new InetSocketAddress(host, port));
		server.run();
	}

	@Bean
	public CommandLineRunner run(UserRepository userRepository) throws Exception {
		return (String[] args) -> {
			Users user1 = new Users("John", "john@domain.com");
			Users user2 = new Users("Julie", "julie@domain.com");
			userRepository.save(user1);
			userRepository.save(user2);
			userRepository.findAll().forEach(System.out::println);
		};
	}

}
