package page_objs;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

public class CucumberProjectObjs {
	public static WebDriver driver;
//	public static UI ui;
	public static Logger log;

	
	public CucumberProjectObjs (WebDriver driver) {
		this.driver=driver;
		
	}
	
	
	public void test() {
		System.out.println("Test Passed");
	}
}
