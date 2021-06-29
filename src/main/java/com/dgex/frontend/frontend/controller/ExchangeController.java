package com.dgex.frontend.frontend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
public class ExchangeController {

    @Value("${api.url}")
    private String apiAddress;

    @RequestMapping(value = "/exchange/exchangeList", method = RequestMethod.GET)
    public ModelAndView exchangeList(ModelAndView mav, HttpServletRequest request) {
        if(request.getHeader("REFERER") == null){
            mav.setViewName("redirect:/login");
        }else{
            mav.addObject("apiAddress",apiAddress);
            mav.setViewName("/exchange/exchangeList");
        }
        return mav;
    }
}
