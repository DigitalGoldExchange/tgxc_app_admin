package com.dgex.frontend.frontend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Locale;

@Controller
public class MainController {
    @Value("${api.url}")
    private String apiAddress;

    @Autowired
    MessageSource messageSource;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView index(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("index");
        return mav;
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ModelAndView login(
            ModelAndView mav,
            @RequestParam(value = "language", required = false) String language,
            HttpServletRequest request) {
        HttpSession session = request.getSession();
        Locale locales = null;
        System.out.println("language:"+language);
        if("en".equals(language)){
            System.out.println("ENGLISH");
            locales = Locale.ENGLISH;
            System.out.println("11111:"+locales);
        }else{
            System.out.println("KOREA");
            locales = Locale.KOREA;
            System.out.println("22222:"+locales);
        }
        session.setAttribute(SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME,locales);

        //버튼을 눌렀을 때 Locale를 변경하면 끝
        String loginText = messageSource.getMessage("loginText", null, Locale.KOREA);
        String findPassword = messageSource.getMessage("findPassword", null, Locale.KOREA);

        mav.addObject("apiAddress",apiAddress);
        mav.addObject("loginText",loginText);
        mav.addObject("findPassword",findPassword);
        mav.setViewName("login");
        return mav;
    }

    @RequestMapping(value = "/find", method = RequestMethod.GET)
    public ModelAndView find(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("find");
        return mav;
    }


}
