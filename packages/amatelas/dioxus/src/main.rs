#![allow(non_snake_case)]
use dioxus::prelude::*;

fn main() {
    dioxus_web::launch(App);
}

fn App(cx: Scope) -> Element {
    cx.render(rsx! {
        h1 {
            class: "AMUI-component-heading_ AMUI-component-heading_h1",
            "hello world"
        }
    })
}

