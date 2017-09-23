package com.ase.team1.foodcycled;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

import com.facebook.CallbackManager;
import com.facebook.FacebookCallback;
import com.facebook.FacebookException;
import com.facebook.FacebookSdk;
import com.facebook.login.LoginResult;
import com.facebook.login.widget.LoginButton;
import com.facebook.appevents.AppEventsLogger;


/**
 * Created by Shreya on 9/21/2017.
 */

public class MainActivity extends AppCompatActivity{
    LoginButton loginButton;
 CallbackManager callbackManager;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        FacebookSdk.sdkInitialize(getApplicationContext());
        AppEventsLogger.activateApp(this);
        setContentView(R.layout.activity_open);
   loginButton=(LoginButton)findViewById(R.id.login_button);
     callbackManager= CallbackManager.Factory.create();
       loginButton.registerCallback(callbackManager, new FacebookCallback<LoginResult>() {
           @Override
            public void onSuccess(LoginResult loginResult) {
                Intent redirect=new Intent(MainActivity.this,HomeActivity.class);
                startActivity(redirect);

            }

            @Override
            public void onCancel() {

            }

            @Override
           public void onError(FacebookException error) {

            }
        });

    }

   @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        callbackManager.onActivityResult(requestCode,resultCode,data);
    }

    public void loginpage(View v)
    {


        Intent redirect=new Intent(MainActivity.this,LoginActivity.class);
        startActivity(redirect);
    }



    public void registerpage(View v)
    {
        Intent redirect=new Intent(MainActivity.this,SignupActivity.class);
        startActivity(redirect);
    }
}
