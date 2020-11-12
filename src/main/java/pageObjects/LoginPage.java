package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import javax.annotation.CheckForNull;

public class LoginPage {
    public WebDriver ldriver;
    public  LoginPage(WebDriver rdriver){
        ldriver = rdriver;
        PageFactory.initElements(rdriver, this);
    }
    @FindBy (id = "username")
    @CacheLookup
    WebElement txtEmail;

    @FindBy (id="password")
    @CacheLookup
    WebElement txtPassword;

    @FindBy (xpath = "//*[text() ='Log in']")
    @CacheLookup
    WebElement btnLogin;

    public void setUserName (String uname){
        txtEmail.clear();
        txtEmail.sendKeys(uname);
    }
    public void setPassWord (String pass){
        txtPassword.clear();
        txtPassword.sendKeys(pass);
    }

    public void clickLogin ( ){
        btnLogin.click();
    }
}
