package parallelStepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;


public class HomePageDefinition {
    WebDriver driver;

    @Given("User Navigates to HRM login page")
    public void user_Navigates_to_HRM_login_page() {
        System.setProperty("webdriver.gecko.driver","C:\\Program Files\\Drivers\\Driver\\geckodriver.exe");
        driver = new FirefoxDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.get("https://opensource-demo.orangehrmlive.com/");
    }

    @Given("User login with valid credentials")
    public void user_login_with_valid_credentials() throws InterruptedException {
        Thread.sleep(1000);

        driver.findElement(By.name("txtUsername")).sendKeys("Admin");
        driver.findElement(By.name("txtPassword")).sendKeys("admin123");
        driver.findElement(By.id("btnLogin")).submit();
    }

    @When("User is in Dashboard page")
    public void user_is_in_Dashboard_page() {
        String dashboardTitle = driver.findElement(By.id("welcome")).getText();
        Assert.assertTrue(dashboardTitle.contains("Welcome"));
    }

    @Then("there are valid QuickLaunch options {string}")
    public void there_are_valid_QuickLaunch_options(String options) throws InterruptedException {
        switch (options) {
            case "Assign Leave":
                String linkOne = driver
                        .findElement(By.xpath(
                                "//*[@id='dashboard-quick-launch-panel-menu_holder']/table/tbody/tr/td[1]/div/a/span"))
                        .getText();
                Assert.assertEquals(linkOne, options);
                Thread.sleep(1000);
                break;
            case "Leave List ":
                String linkTwo = driver
                        .findElement(By.xpath(
                                "//*[@id='dashboard-quick-launch-panel-menu_holder']/table/tbody/tr/td[2]/div/a/span"))
                        .getText();
                Assert.assertEquals(linkTwo, options);
                Thread.sleep(1000);
                break;
            case "Timesheets":
                String linkThree = driver
                        .findElement(By.xpath(
                                "//*[@id='dashboard-quick-launch-panel-menu_holder']/table/tbody/tr/td[3]/div/a/span"))
                        .getText();
                Assert.assertEquals(linkThree, options);
                Thread.sleep(1000);
                break;
            default:
                break;
        }
        driver.quit();
    }

    @Then("there are valid Legend options {string}")
    public void there_are_valid_Legend_options(String options) throws InterruptedException {
        switch (options) {
            case "Not assigned to Subunits":
                String linkOne = driver
                        .findElement(
                                By.xpath("//*[@id='div_legend_pim_employee_distribution_legend']/table/tbody/tr[1]/td[2]"))
                        .getText();
                Assert.assertEquals(linkOne, options);
                Thread.sleep(1000);
                break;
            case "Administration":
                String linkTwo = driver
                        .findElement(
                                By.xpath("//*[@id='div_legend_pim_employee_distribution_legend']/table/tbody/tr[2]/td[2]"))
                        .getText();
                Assert.assertEquals(linkTwo, options);
                Thread.sleep(1000);
                break;
            case "Client Services":
                String linkThree = driver
                        .findElement(
                                By.xpath("//*[@id='div_legend_pim_employee_distribution_legend']/table/tbody/tr[3]/td[2]"))
                        .getText();
                Assert.assertEquals(linkThree, options);
                Thread.sleep(1000);
                break;
            default:
                break;

        }
        driver.quit();
    }

}
