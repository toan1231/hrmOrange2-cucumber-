package ui_automation.step_definitions;

import io.cucumber.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import ui_automation.utilities.Driver;

public class PangiamStep {
    @Then("I open Pangiam url")
    public void iOpenPangiamUrl() throws InterruptedException {
        WebDriver driver=Driver.getInstance().getDriver();
        driver.get("https://pangiam.com/");
        driver.findElement(By.xpath("//*[@id='hs-eu-confirmation-button']")).click();
        Thread.sleep(70000);
    }
}
