package runnerTest;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resources"},
          glue= {"parallelStepDefinitions"},
          plugin = { "pretty","html:target/cucumber-reports","json:target/cucumber-reports/cucumber.json"},
          monochrome = true
     )

public class RunCucumberTest {
}



    /*
  These feature file contains the below number of scenarios:
        FlightBooking – 2 Scenarios
        TrainBooking – 1 Scenario
        Login – 1 Scenario
        Home – 4 Scenarios

Feature files are executed in alphabetical order So, the sequence in which non-parallel
tests will run is FlightBooking -> Home ->Login -> TrainBooking

Having executed tests parallel,so the feature files will run in this order
(depending on the least number of scenarios will be executed first)
TrainBooking -> FlightBooking -> Login -> Home

All the tests of a particular feature file are executed together as feature files
are run in parallel, not scenarios.
     */