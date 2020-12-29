package com.i2n.spyfall.views.game;

import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.i2n.spyfall.views.main.MainView;

@Route(value = "about", layout = MainView.class)
@PageTitle("Game")
public class GameView extends Div {

    public GameView() {
        setId("game-view");
        add(new Text("Content placeholder"));
    }

}
