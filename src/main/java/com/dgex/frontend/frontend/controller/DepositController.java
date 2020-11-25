package com.dgex.frontend.frontend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
public class DepositController {

    @Value("${api.url}")
    private String apiAddress;

    @RequestMapping(value = "/deposit/depositList", method = RequestMethod.GET)
    public ModelAndView exchangeList(ModelAndView mav, HttpServletRequest request) {

        if(request.getHeader("REFERER") == null){
            mav.setViewName("redirect:/login");
        }else{
            mav.addObject("apiAddress",apiAddress);
            mav.setViewName("/deposit/depositList");
        }
        return mav;
    }

    @RequestMapping(value = "/deposit/depositDetail", method = RequestMethod.GET)
    public ModelAndView depositDetail(ModelAndView mav,@RequestParam("exchangeId") String exchangeId
    ,@RequestParam("userId") String userId, HttpServletRequest request
    ) {

        if(request.getHeader("REFERER") == null){
            mav.setViewName("redirect:/login");
        }else{
            mav.addObject("apiAddress",apiAddress);
            mav.addObject("exchangeId",exchangeId);
            mav.addObject("userId",userId);
            mav.setViewName("/deposit/depositDetail");
        }

        return mav;
    }
}
