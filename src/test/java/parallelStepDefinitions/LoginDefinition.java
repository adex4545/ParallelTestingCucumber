package parallelStepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.util.concurrent.TimeUnit;


public class LoginDefinition {

    WebDriver driver;

    @Given("User is on Home page")
    public void user_is_on_Home_page() {
        System.setProperty("webdriver.gecko.driver","C:\\Program Files\\Drivers\\Driver\\geckodriver.exe");
        driver = new FirefoxDriver();
        // driver.manage().deleteCookieNamed("Accept All");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.navigate().to("https://opensource-demo.orangehrmlive.com/");

    }

    @When("User enters username as {string}")
    public void user_enters_username_as(String userName) throws InterruptedException{
        System.out.println("Username Entered");
        driver.findElement(By.name("txtUsername")).sendKeys(userName);
    }

    @When("User enters password as {string}")
    public void user_enters_password_as(String passWord) {
        System.out.println("Password Entered");
        driver.findElement(By.name("txtPassword")).sendKeys(passWord);
        driver.findElement(By.id("btnLogin")).submit();
    }

    @Then("User should be able to login successfully")
    public void user_should_be_able_to_login_successfully() {
        String newPageText = driver.findElement(By.id("welcome")).getText();
        System.out.println("newPageText :" + newPageText);
        Assert.assertTrue(newPageText.contains("Welcome"));
        driver.quit();
    }
}
