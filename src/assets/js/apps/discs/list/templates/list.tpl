<div>
    <div data-subview="discsTitle"></div>

    <div class="list-group">
        <% for(var disc in discs) { %>

        <div class="media">
            <a href="#" class="list-group-item">
                <div class="pull-left" style="margin-top: -18px;">
                    <img src="http://journeysimple.com/wp-content/uploads/2015/06/<%= discs[disc].name %>.jpeg" style="width: 80px; height: 80px; padding: 10px;" class="media-object" alt="Sample Image">
                </div>

            <div class="media-body">
                <h4 class="media-heading"><%= discs[disc].name %><small><i> (<%= discs[disc].brand %>)</i></small></h4>
                <p>This is a <%= discs[disc].type %> disc with a speed of <%= discs[disc].speed %> and a weight of <%= discs[disc].weight %></p>
            </div>
            </a>
        </div>
        <% } %>
    </div>
</div>

