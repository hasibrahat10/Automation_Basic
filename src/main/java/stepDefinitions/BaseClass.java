package stepDefinitions;

import org.openqa.selenium.WebDriver;
import pageObjects.AddCustomer;
import pageObjects.LoginPage;
import org.apache.commons.lang3.RandomStringUtils;


public class BaseClass {
    public WebDriver driver;
    public LoginPage lp;
    public AddCustomer addCust;

    //Created for generating random string for Unique email
    public static String randomestring() {
        String generatedString1 = RandomStringUtils.randomAlphabetic(5);
        return (generatedString1);
    }
}
