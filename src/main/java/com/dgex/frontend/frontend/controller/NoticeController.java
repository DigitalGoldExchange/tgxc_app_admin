package com.dgex.frontend.frontend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class NoticeController {
    @Value("${api.url}")
    private String apiAddress;

    @RequestMapping(value = "/notice/noticeList", method = RequestMethod.GET)
    public ModelAndView noticeList(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("/notice/noticeList");
        return mav;
    }

    @RequestMapping(value = "/notice/noticeAdd", method = RequestMethod.GET)
    public ModelAndView noticeAdd(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("/notice/noticeAdd");
        return mav;
    }

    @RequestMapping(value = "/notice/noticeDetail", method = RequestMethod.GET)
    public ModelAndView noticeDetail(ModelAndView mav,@RequestParam("noticeId") String noticeId) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("noticeId",noticeId);
        mav.setViewName("/notice/noticeDetail");
        return mav;
    }
}
