package parallelStepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class TrainBookingDefinitions {

    @Given("I want to book one way train ticket from Dublin to Cork on 10th June for {int} adults and {int} kids")
    public void i_want_to_book_one_way_train_ticket_from_Dublin_to_Cork_on_10th_June_for_adults_and_kids(Integer int1, Integer int2) {

    }

    @Then("IrishRail should provide me options to book train ticket for the specified date")
    public void irishrail_should_provide_me_options_to_book_train_ticket_for_the_specified_date() {

    }
}
