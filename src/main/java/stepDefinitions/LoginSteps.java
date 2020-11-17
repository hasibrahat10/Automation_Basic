package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;
import pageObjects.LoginPage;

import java.util.logging.Level;
import java.util.logging.Logger;

public class LoginSteps extends BaseClass {


    @Given("^User Launch Chrome browser$")
    public void user_Launch_Chrome_browser()  {
        System.setProperty(ChromeDriverService.CHROME_DRIVER_EXE_PROPERTY, System.getProperty("user.dir")+"/driver/chromedriver.exe");
        System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY, "true");
        Logger.getLogger("org.openqa.selenium").setLevel(Level.OFF);
        ChromeOptions options = new ChromeOptions();
        options.setHeadless(false);
        driver = new ChromeDriver(options);
        lp =new LoginPage(driver);
    }

    @When("^User opens URL \"(.*?)\"$")
    public void user_opens_URL(String url)  {
        driver.get(url);
        driver.manage().window().maximize();
    }

    @When("^User enters Email as \"(.*?)\" and Password as \"(.*?)\"$")
    public void user_enters_Email_as_and_Password_as(String email, String password)  {
        lp.setUserName(email);
        lp.setPassWord(password);
    }

    @When("^Click on Login$")
    public void click_on_Login() {
        lp.clickLogin();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    @Then("^Page Title should be \"(.*?)\"$")
    public void page_Title_should_be(String title) {
        if(driver.getPageSource().contains("Login was unsuccessful.")){
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

    @When("^User click on Logout link$")
    public void user_click_on_Logout_link()  {
        lp.clickLogOut();
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    @Then("^Close Browser$")
    public void close_Browser() {
        driver.quit();
    }

    //Customer Feature Step Definitions

    @Then("^User can view Dashboard$")
    public void user_can_view_Dashboard() throws Throwable {

    }

    @When("^User click on customers Menu$")
    public void user_click_on_customers_Menu() throws Throwable {

    }

    @When("^click on customers Menu Item$")
    public void click_on_customers_Menu_Item() throws Throwable {

    }

    @When("^click on Add new button$")
    public void click_on_Add_new_button() throws Throwable {
    }

    @Then("^User can view Add new customer page$")
    public void user_can_view_Add_new_customer_page() throws Throwable {

    }

    @When("^User enter customer info$")
    public void user_enter_customer_info() throws Throwable {

    }

    @When("^click on Save button$")
    public void click_on_Save_button() throws Throwable {

    }

    @Then("^User can view confirmation message \"(.*?)\"$")
    public void user_can_view_confirmation_message(String arg1) throws Throwable {

    }


}
