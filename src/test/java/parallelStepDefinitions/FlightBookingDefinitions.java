package parallelStepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class FlightBookingDefinitions {
    @Given("I want to book one way flight ticket from Dublin to London on 22nd July for {int} adults and {int} kids")
    public void i_want_to_book_one_way_flight_ticket_from_Dublin_to_London_on_22nd_July_for_adults_and_kids(Integer int1, Integer int2) {
        System.out.println("I want to book one way flight ticket from Dublin to London on 22nd July for 2 adults and 2 kids");
    }

    @Then("TripAdvisor should provide me options to book flight ticket")
    public void tripadvisor_should_provide_me_options_to_book_flight_ticket() {
        System.out.println("TripAdvisor should provide me options to book flight ticket");
    }

    @Given("I want to book round trip flight ticket from Dublin to India on 30th June and return 10th July for {int} adults and {int} kid")
    public void i_want_to_book_round_trip_flight_ticket_from_Dublin_to_India_on_30th_June_and_return_10th_July_for_adults_and_kid(Integer int1, Integer int2) {
        System.out.println("I want to book one way flight ticket from Dublin to London on 22nd July for 2 adults and 2 kids");
    }
}
