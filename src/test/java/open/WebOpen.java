package open;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.util.concurrent.TimeUnit;


public class WebOpen {


    public static void main(String[] args) {
        System.setProperty("webdriver.gecko.driver","C:\\Program Files\\Drivers\\Driver\\geckodriver.exe");
        WebDriver driver = new FirefoxDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.get("https://opensource-demo.orangehrmlive.com/");

        driver.quit();
    }
}
