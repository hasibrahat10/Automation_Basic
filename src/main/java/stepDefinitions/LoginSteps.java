package stepDefinitions;

import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageObjects.LoginPage;

public class LoginSteps {
    public WebDriver driver;
    public LoginPage lp;

    @Given("^User Launch Chrome browser$")
    public void user_Launch_Chrome_browser()  {

        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/driver/chromedriver.exe");
        driver = new ChromeDriver();

        lp =new LoginPage(driver);

    }

    @When("^User opens URL \"(.*?)\"$")
    public void user_opens_URL(String url)  {
        driver.get(url);
        driver.manage().window().maximize();

    }

    @When("^users enters Email as \"(.*?)\" and Password as \"(.*?)\"$")
    public void users_enters_Email_as_and_Password_as(String username, String password)  {
        lp.setUserName(username);
        lp.setPassWord(password);

    }

    @When("^Click on Login$")
    public void click_on_Login()  {
        lp.clickLogin();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    @Then("^Page title should be \"(.*?)\"$")
    public void page_title_should_be(String title)  {
        if(driver.getPageSource().contains("Sorry, that didn’t work. Please try again")){
            driver.close();
            Assert.assertTrue(false);
        }else{
            Assert.assertEquals(title, driver.getTitle());
        }
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    @Then("^Close Browser$")
    public void close_Browser()  {
        driver.quit();
    }
}
