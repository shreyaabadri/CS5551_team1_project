package com.ase.team1.foodcycled;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

/**
 * Created by Shreya on 9/22/2017.
 */

public class HomeActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
    }

    public void logoutOption(View v)
    {
        Intent redirect=new Intent(HomeActivity.this,MainActivity.class);
        startActivity(redirect);
    }
}
