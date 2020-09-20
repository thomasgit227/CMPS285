using Microsoft.EntityFrameworkCore.Migrations;

namespace MSMBackend.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Property",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Location = table.Column<string>(nullable: true),
                    ImageURL = table.Column<string>(nullable: true),
                    Utilities = table.Column<bool>(nullable: false),
                    Roof = table.Column<int>(nullable: false),
                    ExtWalls = table.Column<int>(nullable: false),
                    ExtOpenings = table.Column<int>(nullable: false),
                    Framework = table.Column<int>(nullable: false),
                    Piers = table.Column<int>(nullable: false),
                    Chimney = table.Column<int>(nullable: false),
                    Door = table.Column<int>(nullable: false),
                    Windows = table.Column<int>(nullable: false),
                    Shutters = table.Column<int>(nullable: false),
                    Flooring = table.Column<int>(nullable: false),
                    Electrical = table.Column<int>(nullable: false),
                    Plumbing = table.Column<int>(nullable: false),
                    Sewer = table.Column<int>(nullable: false),
                    HVAC = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Property", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Property");
        }
    }
}
