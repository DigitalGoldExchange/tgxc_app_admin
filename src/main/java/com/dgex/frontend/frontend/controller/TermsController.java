package com.dgex.frontend.frontend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TermsController {

    @RequestMapping(value = "/terms/termsUseEnList", method = RequestMethod.GET)
    public ModelAndView termsUseEnList(ModelAndView mav) {
//        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("/terms/termsUseEnList");
        return mav;
    }

    @RequestMapping(value = "/terms/termsPrivacyEnList", method = RequestMethod.GET)
    public ModelAndView termsPrivacyEnList(ModelAndView mav) {
//        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("/terms/termsPrivacyEnList");
        return mav;
    }

    @RequestMapping(value = "/terms/termsUseKoList", method = RequestMethod.GET)
    public ModelAndView termsUseKoList(ModelAndView mav) {
//        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("/terms/termsUseKoList");
        return mav;
    }

    @RequestMapping(value = "/terms/termsPrivacyKoList", method = RequestMethod.GET)
    public ModelAndView termsPrivacyKoList(ModelAndView mav) {
//        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("/terms/termsPrivacyKoList");
        return mav;
    }
}
