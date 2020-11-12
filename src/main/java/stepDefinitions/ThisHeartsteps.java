package stepDefinitions;

import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class ThisHeartsteps {
    WebDriver driver;

    @Given("^I launch (\\d+) chrome browser$")
    public void i_launch_chrome_browser(int chrome) {
        System.out.println(chrome);
        System.setProperty("webdriver.chrome.driver", "C:\\Drivers\\chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver(); // launch browser
    }

    @When("^I open thisheart homepage$")
    public void i_open_thisheart_homepage() {
        driver.get("https://thisheart.co/");
    }

    @Then("^I verify the logo present on the page$")
    public void i_verify_the_logo_present_on_the_page() {
       boolean status = driver.findElement(By.xpath("//*[@id=\"header\"]/div/nav/a/img")).isDisplayed();
        Assert.assertEquals(true, status);
    }

    @Then("^close browser$")
    public void close_browser() {
        driver.quit();
    }
}
