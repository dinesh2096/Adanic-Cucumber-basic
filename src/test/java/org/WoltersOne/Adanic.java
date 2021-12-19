package org.WoltersOne;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources",glue="org.WoltersTwo",monochrome=true,plugin= {"junit:src\\test\\resources\\sample\\new.xml"})
public class Adanic {

}
