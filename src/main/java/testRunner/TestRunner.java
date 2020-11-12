package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\main\\java\\Features\\", glue = "stepDefinitions", dryRun = false, monochrome = false,
       plugin={"pretty","html:target/cucumber-html","json:target/cucumber.json"},
        tags = {"@login"}

)
public class TestRunner {
}